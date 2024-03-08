from abc import ABC,abstractmethod
import datetime

class Transport(ABC):

    @abstractmethod
    def operation(self,speed):
        pass

class PublicTransport(Transport):
    speed = 50

    def operation(self, distance):
        estimated_hours = distance / self.speed
        return str(datetime.timedelta(hours=estimated_hours))


class Car(Transport):
    speed = 90

    def operation(self, distance):
        estimated_hours = distance / self.speed
        return str(datetime.timedelta(hours=estimated_hours))


class Bike(Transport):
    speed = 75

    def operation(self, distance):
        estimated_hours = distance / self.speed
        return str(datetime.timedelta(hours=estimated_hours))