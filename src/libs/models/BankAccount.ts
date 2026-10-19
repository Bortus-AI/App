import CONST from '@src/CONST';
import type BankAccountJSON from '@src/types/onyx/BankAccount';

class BankAccount {
    json: BankAccountJSON;

    constructor(accountJSON: BankAccountJSON) {
        this.json = accountJSON;
    }

    getState() {
        return this.json.accountData?.state;
    }

    isOpen() {
        return this.getState() === CONST.BANK_ACCOUNT.STATE.OPEN;
    }

    /**
     * Is it the account to use by default to receive money?
     */
    isDefaultCredit() {
        return this.json.accountData?.defaultCredit === true;
    }

    getType() {
        return this.json.accountData?.type;
    }

    /**
     * In which country is the bank account?
     */
    getCountry() {
        return this.json.accountData?.additionalData?.country ?? CONST.COUNTRY.US;
    }

    /**
     * Get the pending action of the bank account
     */
    getPendingAction() {
        return this.json.pendingAction ?? '';
    }
}

export default BankAccount;
