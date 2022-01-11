const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        // get all users 
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        },

        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        },

        // Get all thoughts
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },

        // Get thought by id
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        }
    }
};

// Stopping at 21.1.6 at "Use Query Variables"

module.exports = resolvers;