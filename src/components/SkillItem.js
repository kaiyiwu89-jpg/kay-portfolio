import React from "react";

const SkillItem = ({ skill }) => {
  const { name } = skill;

  const iconName = name.replace(/\s+/g, "");
  const displayName = name.replace("CSharp", "C#");

  let iconSrc = null;
  try {
    iconSrc = require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    iconSrc = null;
  }

  return (
    <div className="d-flex align-items-center justify-content-center w-100 single-item">
      {iconSrc && <img src={iconSrc} alt={`${displayName} Icon`} />}
      <span>{displayName}</span>
    </div>
  );
};

export default SkillItem;
