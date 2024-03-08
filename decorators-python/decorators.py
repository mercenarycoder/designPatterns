import functools

def my_decorator(func):
    def wrapper():
        print("I am called first.")
        func()
        print("called their...")
    return wrapper()

def name():
    print("My name is manjeet")

def do_twice(func):
    @functools.wraps(func)
    def wrapper(*args,**kwargs):
        func(*args,**kwargs)
        print(type (args))
        print(type (kwargs))
        return func(*args,**kwargs)
    return wrapper

@do_twice
def addition(a,b):
    return a+b

print(addition(3,4))
print(addition.__name__)
my_decorator(name)