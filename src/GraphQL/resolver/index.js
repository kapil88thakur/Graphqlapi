const { mergeResolvers } = require('@graphql-tools/merge')
const vendorResolver = require('./vendorResolver')
const shopResolver = require('./shopResolver')
const productResolver = require('./productResolver')
const resolvers = [vendorResolver, shopResolver,productResolver]
module.exports = mergeResolvers(resolvers);