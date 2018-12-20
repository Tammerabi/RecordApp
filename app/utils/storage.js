import { AsyncStorage } from "react-native";

export default async function (key, value) {
    try {
      var item = await AsyncStorage.setItem(key, value);
      return item;
    } catch (error) {
        console.log(error.message);
    }
}

async function createRecord(id, record) {
    try {
      var rec = await AsyncStorage.setItem(id, JSON.stringify(record));
      return rec;
    } catch (error) {
        console.log(error.message);
    }
}

async function getAllRecords() {
    console.log('gar')
    try {
        var keys = await AsyncStorage.getAllKeys()
        var records = await AsyncStorage.multiGet(keys);
        return records;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export { createRecord, getAllRecords }