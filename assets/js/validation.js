//declare variable
const form = document.getElementById('form')


const fields_validations = {
    'first_name': /^[a-zA-Z ]{2,30}$/,
    'last_name': /^[a-zA-Z ]{2,30}$/,
    'job_title': /^[a-zA-Z ]{2,30}$/,
    'company_name': /^[a-zA-Z ]{2,30}$/,
    'company_size': /!disabled selected/, 
    'phone': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, //regular expression for mobile_number
    'email': /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'company_website': new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'), // fragment locator
}
// onblur function validation
form.addEventListener("blur", function (event) {
       
    const test_validation = fields_validations[event.target.id];
    if (test_validation.test(event.target.value)) {
       event.target.classList.remove('not-valid');
    } else {
        event.target.classList.add('not-valid');

    }
},
    true
);






