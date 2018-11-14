import random
import string

class Robot(object):
    def __init__(self):
        self.__name = self.__generateName()

    @property
    def name(self):
        return self.__name

    @staticmethod
    def __generateName():
        letters = random.SystemRandom().sample(string.ascii_uppercase, 2)
        numbers = random.SystemRandom().sample(string.digits, 3)
        return ''.join(letters + numbers)

    def reset(self):
        # reinstantiate the stuff we set in __init__ to get a new name
        self.__name = self.__generateName()
