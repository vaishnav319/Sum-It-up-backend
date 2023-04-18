import sys
import json

# def read_in():
#     lines = sys.stdin.readlines()
#     return json.loads(lines[0])

# def main():
#     data = read_in()
#     # Python code to create a file
#     file = open('geek.txt','w')
#     file.write("This is the write command")
#     file.write("Hello world"+str(data))
#     file.close()

#     print("Hello world"+str(data))
 
# if __name__ == '__main__':
#     main()
lines = sys.stdin.readlines()
file = open('geek.txt','w')
file.write("This is the write command")
file.write("Hello world")
file.close()
data=json.loads(lines[0])
print("Hello world"+str(data))