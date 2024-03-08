from ..command import Command

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