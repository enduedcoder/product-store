const capitalizeFirstLetter = (stringToCapitalize) => {
  const FIRST_CHARACTER_INDEX = 0;
  const STRING_FIRST_INDEX = 1;

  return (
    stringToCapitalize.charAt(FIRST_CHARACTER_INDEX).toUpperCase() +
    stringToCapitalize.slice(STRING_FIRST_INDEX)
  );
};

export default capitalizeFirstLetter;
