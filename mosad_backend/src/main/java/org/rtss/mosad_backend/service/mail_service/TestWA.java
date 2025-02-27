package org.rtss.mosad_backend.service.mail_service;

import org.modelmapper.internal.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TestWA {
    @Autowired
    WhatsAppNotificationService whatsAppNotificationService;

    //@Scheduled(fixedRate = 3000)
    public void sendWhatsAppMessage() {
        whatsAppNotificationService.sendWhatsAppMessage("94717529331", "Hello, this is a test message.");
    }
}
