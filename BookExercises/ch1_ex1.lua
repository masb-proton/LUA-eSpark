-- Exercise 3.1: Which of the following are valid numerals? What are their values?
-- .0e12
-- .e12
-- 0x
-- 0x1P10
-- 0.0e
-- 0.1e1
-- 0x12
-- 0xABFG
-- 0x0.1p1
-- 0xA
-- FFFF
-- 0xFFFFFFFF

print(".0e12 is " .. .0e12)
print(".e12 is Error")
print("0x is Error ")
print("0x1P10 is " .. 0x1P10)
print("0.0e is Error ")
print("0.1e1 is " .. 0.1e1)
print("0x12 is " .. 0x12)
print("0xABFG is Error")
print("0x0.1p1 is " .. 0x0.1p1)
print("0xA is " .. 0xA)
print(FFFF)
print("0xFFFFFFFF is " .. 0xFFFFFFFF)

print("0x0.2 is " .. 0x0.2)
print("0xff is " .. 0xff)
print("0x1A3 is " .. 0x1A3)
print("0x0.2 is " .. 0x0.2)
print("0x1p-1 is " .. 0x1p-1)
print("0xa.bp2 is " .. 0xa.bp2)