from fastapi import FastAPI
from itertools import cycle
import logging
from math import ceil
import numpy as np
import random
from PIL import Image
from pydantic import BaseModel

class Image(BaseModel):
    url: str
    name: str

class Item(BaseModel):
    queryNum : int
   

app = FastAPI()

def generate_random_image(width, height):
    rgb_value = np.random.randint(0, 256, 3, dtype=np.uint8)
    array = np.full((height, width, 3), rgb_value, dtype=np.uint8)
    image = Image.fromarray(array)
    return image


@app.get("/{queryNum}")
async def root(queryNum : int):
    # imageArray = []
    # for i in range(queryNum):
    #     imageArray.push(generate_random_image(600,400)) 
    # print(item)
    return queryNum