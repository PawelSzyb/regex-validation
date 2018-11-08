// validation script here

const inputs = document.querySelectorAll("input");
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d\s-]{5,21}$/i,
  password: /^[\w@-]{8,21}$/i,
  slug: /^[-a-z\d]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// Validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else if (field.value.length === 0) {
    field.className = "";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach(input => {
  input.addEventListener("input", e => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
