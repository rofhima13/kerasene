from keras.layers import *
from keras.models import Model
import numpy as np

# Define the model

inp = Input(1)
out = Dense(1, input_dim=10, activation='sigmoid')(inp)

model = Model(inp, out, name="model")

print(model.get_config())