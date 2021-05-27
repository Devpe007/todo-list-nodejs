import Sequelize, { Model } from 'sequelize';

class Task extends Model {
    static init(sequelize) {
        super.init(
            {
                task: Sequelize.STRING,
                check: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
    };
};

export default Task;