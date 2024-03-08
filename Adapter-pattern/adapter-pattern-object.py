class Truck:
    def legacy_method(self):
        return ("Hey I am a legacy method")

class Adapter():
    def __init__(self,obj) -> None:
        self.obj = obj
    
    def new_method(self):
        print(f"hey I am new with {self.obj.legacy_method()}")

def client(adapter):
    result = adapter.new_method()
    print(result)

if __name__ == "__main__":
    truck = Truck()
    adapter = Adapter(truck)
    client(adapter)