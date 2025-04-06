package org.rtss.mosad_backend.controller;

import org.rtss.mosad_backend.service.mail_service.WhatsAppNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    private final WhatsAppNotificationService notificationService;

    @Autowired
    public NotificationController(WhatsAppNotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/hello")
    public String sendHelloWorldTemplate(@RequestParam String to) {
        notificationService.sendHelloWorldTemplate(to);
        return "Success";
    }
}
