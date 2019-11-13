"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tx {
    constructor(rpc, account) {
        this.rpc = rpc;
        this.account = account;
    }
    async sendTx({ tx, mode = 'block' }) {
        const res = await this.rpc.request({
            method: 'POST',
            url: '/txs',
            data: { tx, mode }
        }).catch(err => console.log(err));
        return res;
    }
}
exports.default = Tx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9UeHMvVHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixFQUFFO0lBR3JCLFlBQVksR0FBVyxFQUFFLE9BQWdCO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxHQUFHLE9BQU8sRUFBb0Q7UUFDMUYsTUFBTSxHQUFHLEdBQUcsTUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxNQUFNO1lBQ1gsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztDQUNGO0FBaEJELHFCQWdCQyJ9