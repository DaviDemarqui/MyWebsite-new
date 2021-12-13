package com.demarqui.web.Client;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class ClientDto {
    private Long id;

    @NotBlank(message = "The email is required to create your account!")
    private String email;

    @NotBlank(message="The username is required to create your account!")
    @Size(max = 30, message = "The username can be bigger than {max} characters")
    private String username;

    @NotBlank(message = "The password is required to create your account!")
    @Size(max = 50, message = "The password can be bigger than {max} characters")
    private String password;
}
