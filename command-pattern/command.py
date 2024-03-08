from abc import abstractmethod,ABC
#from .objects.lights import Light,Fan

class Light:
    def __init__(self) -> None:
        self.name = "I am light"
    
    def on(self):
        print("light is turned on")
    
    def off(self):
        print("light turned off")
    
class Fan:
    def __init__(self) -> None:
        self.name ="I am fan"
    
    def on(self):
        print("The fan is turned on")
    
    def off(self):
        print("The light is turned off")

class Command(ABC):

    def __init__(self,reciever) -> None:
        self.reciever = reciever

    @abstractmethod
    def execute(self):
        pass


class LightOnCommand(Command):
    
    def execute(self):
        self.reciever.on()
    
    def undo(self):
        self.reciever.off()

class LightOffCommand(Command):
    
    def execute(self):
        self.reciever.off()
    
    def undo(self):
        self.reciever.on()

class Invoker:
    def __init__(self):
        self.onCommand = []
        self.offCommand = []
        self.undo = None
    
    def registerOnCommand(self,concreteCommand):
        self.onCommand.append(concreteCommand.execute)
    
    def registerOffCommand(self,concreteCommand):
        self.offCommand.append(concreteCommand.execute)
    
    def turnOn(self,index):
        turnOn = self.onCommand[index]
        self.undo = turnOn
        turnOn()
    
    def turnOff(self,index):
        turnOff = self.offCommand[index]
        self.undo = turnOff
        turnOff()
    
    def undo(self):
        self.undo()

if __name__ == "__main__":
    invoke = Invoker()
    light = Light()
    lighton = LightOnCommand(light)
    lightoff = LightOffCommand(light)
    invoke.registerOnCommand(lighton)
    invoke.registerOffCommand(lightoff)
    invoke.turnOn(0)
    invoke.undo()


        


