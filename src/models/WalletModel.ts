export class WalletModel {
    id: number
    balance: number
    points: number
    lastUpdate: string
    users: Users
  }
  
  type Users = {
    id: number
    name: string
    email: string
    password: string
  }