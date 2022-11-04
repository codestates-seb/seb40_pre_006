package com.codestates.preproject.auth.handler;

import com.codestates.preproject.auth.dto.LoginResponseDto;
import com.codestates.preproject.user.entity.User;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        log.info("# Authenticated successfully!");
        sendSuccessResponse(response, authentication);
    }

    private void sendSuccessResponse(HttpServletResponse response,
                                     Authentication authentication) throws IOException {
        Gson gson = new Gson();
        User user = (User) authentication.getPrincipal();
        LoginResponseDto dto = new LoginResponseDto();
        dto.setUserId(user.getUserId());
        dto.setName(user.getName());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(gson.toJson(dto, LoginResponseDto.class));
    }
}
