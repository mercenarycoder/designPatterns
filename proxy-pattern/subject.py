from abc import ABC,abstractmethod

class Subject(ABC):

    @abstractmethod
    def get_response(self):
        pass

    @abstractmethod
    def total_count(self):
        pass


class Proxy(Subject):
    def __init__(self,subject) -> None:
        self.subject = subject
    
    def get_response(self):
        if(self.isAllowed()):
            return self.subject.get_response()
        else:
            print("You are not allowed to request the above service")
    
    def total_count(self):
        return self.subject.total_count()

    def isAllowed(self):
        #A utility method to check weather the request should be processed or not
        return True

class RealObject(Subject):
    def get_response(self):
        return "I am sending the response"
    def total_count(self):
        return 23
    
if __name__ == "__main__":
    real =  RealObject()
    proxy = Proxy(real)

    print(proxy.get_response())