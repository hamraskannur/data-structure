class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    has(key){
        let total=0
        for (let i = 0; i < key.length; i++) {
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        const index=this.has(key)
        const bucket=this.table[index]
        if(!bucket){
           this.table[index]=[[key,value]]
        }else{
           const samekeyFind=bucket.find((item)=>item[0]===key)
           if(samekeyFind){
            samekeyFind[1]=value
           }else{
            bucket.push([key,value])
           }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket =this.table[index]
        if(bucket){
            const samekeyitems=bucket.find((item)=>item[0]===key)
            if(samekeyitems){
                return samekeyitems[1]
            }
        }
        return undefined
      }
    //   on(n)

      remove(key){
        const index=this.hash(key)
        const bucket =this.table[index]
        if(bucket){
            const samekeyitems=bucket.find((item)=>item[0]===key)
            if(samekeyitems){
                 bucket.splice(bucket.indexOf(samekeyitems),1)
            }
        }
      }

      display(){
        for (let i = 0; i < this.table.length; i++) {
              if(this.table[i]){
                 console.log(i,this.table[i]);
              }
        }
      }

}
