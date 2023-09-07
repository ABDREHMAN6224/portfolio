<?php
function custom_form_submission_action($submission_id, $form_id, $posted_data)
{
    // Check if the submitted form has an ID of 27
    if ($form_id == 27) {
        $selected_marital_status =$posted_data['input_radio_13'];
        $selected_your_employment_status =$posted_data['input_radio_15'];
        $selected_spouse_residency =$posted_data['input_radio_14'];
        $selected_spouse_employment =$posted_data['input_radio_11'];
        $selected_your_residency =$posted_data['input_radio_1'];
        $selected_your_spouse_change =$posted_data['input_radio_16'];
        $selected_did_you_change_recently =$posted_data['input_radio_6'];
        $selected_spouse_parental_leave =$posted_data['input_radio_7'];
        $selected_your_parental_leave =$posted_data['input_radio_17'];
        $selected_spouse_germany =$posted_data['input_radio_8'];
        $selected_spouse_personal_loan =$posted_data['input_radio_10'];
        $selected_property_type =$posted_data['input_radio'];
        $selected_prefabricated_house =$posted_data['input_radio_5'];
        $selected_own_use_or_rental =$posted_data['input_radio_3'];
        $selected_construction =$posted_data['input_radio_2'];
        $selected_modernisation =$posted_data['input_radio_4'];
        $entered_email =$posted_data['email'];


        $to =$entered_email;
        $subject = "Form 27 Submission";
        $message = "Submitted data: ";
        // $attachments = array($file_path);

        // Send the email with attachment
        wp_mail($to, $subject, $message);
        // wp_mail($to, $subject, $message, '', $attachments);
    }
}
add_action('fluentform_submission_created', 'custom_form_submission_action', 10, 3);

In this example, the custom_form_submission_action function is hooked to the fluentform_submission_created action. It checks if the submitted form has an ID of 27 using the $form_id parameter. If the form ID matches, you can perform custom actions, such as sending an email notification.

Replace "your@example.com" with the actual email address where you want to receive notifications. You can customize the email subject and message according to your needs.

Remember to add this code to your theme's functions.php file or use a custom plugin. Also, test the code on a staging environment before applying it to your live website to ensure it works as expected.




?>
