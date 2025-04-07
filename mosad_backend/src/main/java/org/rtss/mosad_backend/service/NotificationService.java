package org.rtss.mosad_backend.service;

import org.rtss.mosad_backend.dto.NotificationDTO;
import org.rtss.mosad_backend.entity.Notification;
import org.rtss.mosad_backend.dto_mapper.NotificationMapper;
import org.rtss.mosad_backend.repository.NotificationRepository;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;

    private final NotificationMapper notificationMapper;

    public NotificationService(NotificationRepository notificationRepository, NotificationMapper notificationMapper) {
        this.notificationRepository = notificationRepository;
        this.notificationMapper = notificationMapper;
    }

    public NotificationDTO addNotification(NotificationDTO dto) {
        Notification entity = notificationMapper.toEntity(dto);
        Notification saved = notificationRepository.save(entity);
        System.out.println("saved notification: " + saved);
        return notificationMapper.toDTO(saved);
    }

    public void deleteNotification(Long id) {
        notificationRepository.deleteById(id);
    }
}
