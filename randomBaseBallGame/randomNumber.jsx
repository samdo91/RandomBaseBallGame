

const randomNumberGenerator=(array)=>{
    return shuffleNumber(array)
}

const shuffleNumber=(array)=>{
    const shakeNumbr= array.sort(() => Math.random() - 0.5);
   return shakeNumbr.splice(1,4)

}

export default randomNumberGenerator