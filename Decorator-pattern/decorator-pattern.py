from abc import ABC,abstractmethod

class BaseMario(ABC):
    @abstractmethod
    def runSpeed(self):
        pass

    @abstractmethod
    def tShirtColor(self):
        pass

class Mario(BaseMario):
    def __init__(self):
        self.name ="I am a base mario"
        self.speed = 24

    def runSpeed(self):
        return f"running at {self.speed}"
    
    def tShirtColor(self):
        return f"Red is the base"

class Decorator(BaseMario):
    def __init__(self,mario):
        self.baseMario = mario

class superMario1(Decorator):

    def runSpeed(self):
        return f"{self.baseMario.runSpeed()} plus now I am  Super Mario"
    
    def tShirtColor(self):
        return f"{self.baseMario.tShirtColor()} is not Yellow"

if __name__ == "__main__":
    #base component which needs to be decorated in layers
    mario = Mario()
    print(mario.runSpeed())
    print(mario.tShirtColor())

    #Decorating our Mr Mario and the beauty is without touching exisiting code 
    smart_mario = superMario1(mario)
    print(smart_mario.runSpeed())
    print(smart_mario.tShirtColor())

 
