def phoneNumber(num):
    phone={
        "2":'abc',
        "3":'def',
        "4":'ghi',
        "5":'jkl',
        "6":'mno',
        "7":'pqrs',
        "8":'tuv',
        "9":'wxyz'
    }
    res = []
    def combination(cur,i):
        if len(cur) == len(num):
            res.append(cur)
            return 
        for j in phone[num[i]]:
            combination(cur+j, i+1)
    combination("",0)
    return res

print(phoneNumber("23"))
        