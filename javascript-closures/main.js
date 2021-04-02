function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('MD');
const lawSchool = graduate('Esq');
console.log('medicalSchool: ', medicalSchool('Janelle Gatmaitan'));
console.log('lawSchool: ', lawSchool('Janelle Gatmaitan'));
