import _ from "lodash";

class ApiFeatures {

    totalCount = 10;
    constructor(query, queryData) {
        this.query = query;
        this.queryData = queryData;
    }


    filter() {
        const exclude_field = ['limit', 'page', 'fields', 'sort'];
        let queryString = JSON.stringify(_.omit(this.queryData, exclude_field));
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`)
        let queryObj = JSON.parse(queryString);

        if (this.queryData?.search) {
            const SEARCH = this.queryData.search ? { $regex: this.queryData.search, $options: 'i' } : "";
            queryObj = { $or: [{ firstName: SEARCH }, { lastName: SEARCH }, { email: SEARCH }, { phone: SEARCH }] };
        }

        this.query = this.query.find(queryObj);
        // this.totalCount = await customerModel.countDocuments(OBJECT_VALUE);

        return this;
    }

    sort() {

        if (this.queryData.sort) {
            const SORT_VALUES = _.join(_.split(this.queryData.sort, ','), ' ')
            this.query = this.query.sort(SORT_VALUES);
        } else {
            this.query = this.query.sort('-firstName');
        }
        return this;
    }

    limitedField() {
        if (this.queryData.fields) {
            const FIELDS_VALUES = _.join(_.split(this.queryData.fields, ','), ' ')
            this.query = this.query.select(FIELDS_VALUES);
        } else {
            this.query = this.query.select('-__v');
        }
        return this;
    }


    pagination() {
        const PAGE = this.queryData.page || 1;
        const LIMIT = Number(this.queryData.limit) || 6;
        const SKIP = (PAGE - 1) * LIMIT;
        this.query = this.query.skip(SKIP).limit(LIMIT);

        return this;
    }

    count() {
        const exclude_field = ['limit', 'page', 'fields', 'sort'];
        let queryString = JSON.stringify(_.omit(this.queryData, exclude_field));
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`)
        let queryObj = JSON.parse(queryString);

        if (this.queryData?.search) {
            const SEARCH = this.queryData.search ? { $regex: this.queryData.search, $options: 'i' } : "";
            queryObj = { $or: [{ firstName: SEARCH }, { lastName: SEARCH }, { email: SEARCH }, { phone: SEARCH }] };
        }
        this.query = this.query.countDocuments(queryObj);

        return this;
    }
}

export default ApiFeatures;