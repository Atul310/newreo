let constFunc = async () => {
    try {
        let response = await func1()
        await func2()
        await func3()
    } catch(exception) {
        // 
    }
}

constFunc()