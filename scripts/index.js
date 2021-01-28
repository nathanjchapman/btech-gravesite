const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");


closeButton.addEventListener("click", (event) => {
	event.preventDefault();
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", () => {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

$(function() {
    // Expand cards on hover
    $('.card').hover(function() {
        $(this).toggleClass('expand');
    });

    // Add borders to contact form
    $('.contact input')
        .focus(function() {
            $(this).css('border', '1px solid #ddd');
        })
        .focusout(function() {
            $(this).css('border', 'none');
            $(this).css('border-bottom', '1px solid #ddd');
        });

    // Form validation
    $("form[name='login-form']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: "required"
        },
        messages: {
            email: "Please enter a valid email address.",
            password: "Please enter a password."
        },
        submitHandler: (form) => {
            form.submit();
        }
    });

    $("form[name='find-ancestor-form']").validate({
        rules: {
            search: "required"
        },
        messages: {
            search: "Please enter a name."
        },
        submitHandler: (form) => {
            form.submit();
        }
    });

    $("form[name='contact-form']").validate({
        rules: {
            fullname: "required",
            subject: "required",
            phone: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            },
        },
        messages: {
            fullname: "Please enter your name.",
            subject: "Please enter a valid subject.",
            phone: "Please enter a valid number.",
            email: "Please enter a valid email.",
            message: {
                required: "Please enter a valid message.",
                minlength: "Message must be at least 10 characters."
            },
        },
        submitHandler: (form) => {
            form.submit();
        }
    });
});
