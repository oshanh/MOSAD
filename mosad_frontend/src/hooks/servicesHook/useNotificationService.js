import useApiClient from '../apiClientHooks/useApiClient';

export const useFetchNotificationsByType = () => {
    const apiClient = useApiClient();
  
    const fetchNotificationsByType = (type) => {
      return apiClient.get(`/notifications/${type}`);
    };
  
    return fetchNotificationsByType;
  };
  
