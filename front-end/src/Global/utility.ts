import { notification } from 'antd';
import React from 'react';

class Utility {
    openNotificationInfo = (text: string, description: string) => {
        notification.info({
          message: text,
          description: description,
            placement: 'top',
            duration: 5,
            key: 'error'
        },);
      };

      openNotificationDanger = (text: string, description: string) => {
        notification.error({
          message: text,
          description: description,
            placement: 'top',
            duration: 5,
            key: 'success'
        },);
      };
}

export default new Utility();
