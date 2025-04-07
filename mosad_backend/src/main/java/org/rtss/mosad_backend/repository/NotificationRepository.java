package org.rtss.mosad_backend.repository;

import org.rtss.mosad_backend.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}
