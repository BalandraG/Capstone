package com.nexum.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages="com.nexum.repo")
@EntityScan(basePackages="com.nexum.entity")
public class ApplicationConfig {

}