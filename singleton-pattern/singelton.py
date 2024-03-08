from abc import ABC,abstractmethod

class LoggedInUser(ABC):
    __instance__ = None
    def __init__(self) -> None:
        if LoggedInUser.__instance__ is None:
            LoggedInUser.__instance__ = self
        
        else:
            raise Exception("We cannot create a new instance")
        
    @staticmethod
    def get_instance():
        if not LoggedInUser.__instance__:
            LoggedInUser()
        return LoggedInUser.__instance__


user1 = LoggedInUser()
print(user1)

print(LoggedInUser.get_instance())