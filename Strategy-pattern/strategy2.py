from strategy import *


class RouteSelection:

    def __init__(self,transport):
        self._transport = transport
    
    def time_estimation(self,distance):
        return self._transport.operation(distance)


if __name__ =="__main__":
    publicTransport = PublicTransport()
    print(RouteSelection(publicTransport).time_estimation(45))