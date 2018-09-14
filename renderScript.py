#!/usr/bin/python

import hou
import random
import os 
import sys
import hou

hou.hipFile.load('cliRender.hipnc')

wrangle1 = hou.node('obj/geo1/pointwrangle1')
#seed = int(round(random.random()*2000))
seed = int(sys.argv[1])
print(seed)
wrangle1.parm('Offset').set(seed)
print(wrangle1.parm('Offset').eval())
filePath = os.getcwd()
print(filePath)
savePath = "%s/render_output/render_seed_%d.jpg" % (filePath, seed)
print(savePath)
renderNode = hou.node('out/mantraOut')
renderNode.parm("vm_picture").set(savePath)

renderNode.render()
sys.stdout.flush()