export interface SocketActionsType {
  ADD_TRANSACTION: string,
    RETURN_TRANSACTION: string,
    START_MINING: string,
    RETURN_MINING: string,
    END_MINING: string
}

module.exports = {
    ADD_TRANSACTION: 'add_transaction',
    RETURN_TRANSACTION: 'return_transaction',
    START_MINING: 'start_mining',
    RETURN_MINING: 'return_mining',
    END_MINING: 'end_mining'
};


