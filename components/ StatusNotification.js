import { useSelector, useDispatch } from 'react-redux';
import { Notification } from '@mantine/core';
import { useEffect } from 'react';
import { removeNotification } from '../store/notificationSlice';
import { NOTIFICATION_TYPE } from '../constants/notifications';
import { useRouter } from 'next/router';

const StatusNotification = () => {
  const { notification } = useSelector(state => state.notification);
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    if (!notification.type || notification.type === NOTIFICATION_TYPE.PENDING) return;
    let timeoutId = setTimeout(() => {
      dispatch(removeNotification());
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [dispatch, notification.type, router.query.id]);


  return (
    <>
      {notification.type && (
        <Notification
          color={
            notification.type === NOTIFICATION_TYPE.SUCCESS ? "green" : "red"
          }
          title={notification.title}
          disallowClose
        >
          {`${notification.message} `}
        </Notification>
      )}
    </>
  );

};

export default StatusNotification;