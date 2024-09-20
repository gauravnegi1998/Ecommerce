class CommonMethod {

    getTotalCount(Model) {
        try {
            if (Model) {
                const COUNT = Model.find().count();
                return COUNT;
            }
        } catch (err) {
            console.log(err);
        }
    }
}

const COMMON = new CommonMethod();

return COMMON;