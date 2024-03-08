from abc import ABC,abstractmethod

#This interface is a blueprint for all the concrete factory classes
class NotificationFactory(ABC):
    @abstractmethod
    def create_email_notification(self):
        pass
    @abstractmethod
    def create_sms_notification(self):
        pass
    @abstractmethod
    def create_push_notification(self):
        pass

class FastNotifFactory(NotificationFactory):
    def create_email_notification(self):
        return FastNotifEmailNotification()
    
    def create_push_notification(self):
        return FastNotifPushNotification()
    
    def create_sms_notification(self):
        return FastNotifSMSNotification()


#defining abstract Product interface now
class AbstractEmailNotification(ABC):
    @abstractmethod
    def send(self):
        pass
    @abstractmethod
    def format_content(self):
        pass

class AbstractPushNotificatin(ABC):
    @abstractmethod
    def send(self):
        pass
    @abstractmethod
    def format_content(self):
        pass

class AbstractSMSNotification(ABC):
    @abstractmethod
    def send(self):
        pass
    @abstractmethod
    def format_content(self):
        pass

#now defining the concrete product types of the thirdparty services made by us
# 3. Concrete Products
class FastNotifEmailNotification(AbstractEmailNotification):
    """Concrete Product for Email Notifications via FastNotif"""

    def send(self):
        print("Sending Email via FastNotif")

    def format_content(self):
        print("Formatting Email content")

class FastNotifSMSNotification(AbstractSMSNotification):
    """Concrete Product for SMS Notifications via FastNotif"""

    def send(self):
        print("Sending SMS via FastNotif")

    def encode_message(self):
        print("Encoding SMS message")

class FastNotifPushNotification(AbstractPushNotificatin):
    """Concrete Product for Push Notifications via FastNotif"""

    def send(self):
        print("Sending Push Notification via FastNotif")

    def format_payload(self):
        print("Formatting Push Notification payload")

# Dictionary to map provider names to factory classes
factory_mapping = {
    "FastNotif": FastNotifFactory(),
    #"SendBlue": SendBlueFactory(),
}