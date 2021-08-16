function validateForm(){

    $("form[name='contact'], form[name='product'], form[name='job-form']").validate({
        // Specify validation rules
        errorElement: "span",
        errorPlacement: function (error, element) {
            if (element.is(":checkbox")) {
                element.closest('.checkbox').append(error);
                console.log(error)
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            name: "required",
            phone: "required",
            message: "required",
            select: "required",
            email: {
                required: true,
                email: true
            },
            money: 'required',
            terms: "required",
            checkContact: "required",
        },
        // Specify validation error messages
        messages: {
            name: "To pole jest wymagane",
            phone: "To pole jest wymagane",
            email: "To pole jest wymagane",
            select: "To pole jest wymagane",
            message: "To pole jest wymagane",
            money: "To pole jest wymagane",
            terms: "Proszę zaznaczyć to pole",
            checkContact: "Proszę zaznaczyć to pole"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
}

export { validateForm };