"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitFormatToJSON = exports.unitFormatFromJSON = exports.UnitFormat = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.monitoring.v3";
var UnitFormat;
(function (UnitFormat) {
    UnitFormat[UnitFormat["UNIT_FORMAT_UNSPECIFIED"] = 0] = "UNIT_FORMAT_UNSPECIFIED";
    /** UNIT_NONE - None (show tick values as-is). */
    UnitFormat[UnitFormat["UNIT_NONE"] = 1] = "UNIT_NONE";
    /** UNIT_COUNT - Count. */
    UnitFormat[UnitFormat["UNIT_COUNT"] = 2] = "UNIT_COUNT";
    /** UNIT_PERCENT - Percent (0-100). */
    UnitFormat[UnitFormat["UNIT_PERCENT"] = 3] = "UNIT_PERCENT";
    /** UNIT_PERCENT_UNIT - Percent (0-1). */
    UnitFormat[UnitFormat["UNIT_PERCENT_UNIT"] = 4] = "UNIT_PERCENT_UNIT";
    /** UNIT_NANOSECONDS - Nanoseconds (ns). */
    UnitFormat[UnitFormat["UNIT_NANOSECONDS"] = 5] = "UNIT_NANOSECONDS";
    /** UNIT_MICROSECONDS - Microseconds (µs). */
    UnitFormat[UnitFormat["UNIT_MICROSECONDS"] = 6] = "UNIT_MICROSECONDS";
    /** UNIT_MILLISECONDS - Milliseconds (ms). */
    UnitFormat[UnitFormat["UNIT_MILLISECONDS"] = 7] = "UNIT_MILLISECONDS";
    /** UNIT_SECONDS - Seconds (s). */
    UnitFormat[UnitFormat["UNIT_SECONDS"] = 8] = "UNIT_SECONDS";
    /** UNIT_MINUTES - Minutes (m). */
    UnitFormat[UnitFormat["UNIT_MINUTES"] = 9] = "UNIT_MINUTES";
    /** UNIT_HOURS - Hours (h). */
    UnitFormat[UnitFormat["UNIT_HOURS"] = 10] = "UNIT_HOURS";
    /** UNIT_DAYS - Days (d). */
    UnitFormat[UnitFormat["UNIT_DAYS"] = 11] = "UNIT_DAYS";
    /** UNIT_BITS_SI - Bits (SI). */
    UnitFormat[UnitFormat["UNIT_BITS_SI"] = 12] = "UNIT_BITS_SI";
    /** UNIT_BYTES_SI - Bytes (SI). */
    UnitFormat[UnitFormat["UNIT_BYTES_SI"] = 13] = "UNIT_BYTES_SI";
    /** UNIT_KILOBYTES - Kilobytes (KB). */
    UnitFormat[UnitFormat["UNIT_KILOBYTES"] = 14] = "UNIT_KILOBYTES";
    /** UNIT_MEGABYTES - Megabytes (MB). */
    UnitFormat[UnitFormat["UNIT_MEGABYTES"] = 15] = "UNIT_MEGABYTES";
    /** UNIT_GIGABYTES - Gigabytes (GB). */
    UnitFormat[UnitFormat["UNIT_GIGABYTES"] = 16] = "UNIT_GIGABYTES";
    /** UNIT_TERABYTES - Terabytes (TB) */
    UnitFormat[UnitFormat["UNIT_TERABYTES"] = 17] = "UNIT_TERABYTES";
    /** UNIT_PETABYTES - Petabytes (PB). */
    UnitFormat[UnitFormat["UNIT_PETABYTES"] = 18] = "UNIT_PETABYTES";
    /** UNIT_EXABYTES - Exabytes (EB). */
    UnitFormat[UnitFormat["UNIT_EXABYTES"] = 19] = "UNIT_EXABYTES";
    /** UNIT_BITS_IEC - Bits (IEC). */
    UnitFormat[UnitFormat["UNIT_BITS_IEC"] = 20] = "UNIT_BITS_IEC";
    /** UNIT_BYTES_IEC - Bytes (IEC). */
    UnitFormat[UnitFormat["UNIT_BYTES_IEC"] = 21] = "UNIT_BYTES_IEC";
    /** UNIT_KIBIBYTES - Kibibytes (KiB). */
    UnitFormat[UnitFormat["UNIT_KIBIBYTES"] = 22] = "UNIT_KIBIBYTES";
    /** UNIT_MEBIBYTES - Mebibytes (MiB). */
    UnitFormat[UnitFormat["UNIT_MEBIBYTES"] = 23] = "UNIT_MEBIBYTES";
    /** UNIT_GIBIBYTES - Gigibytes (GiB). */
    UnitFormat[UnitFormat["UNIT_GIBIBYTES"] = 24] = "UNIT_GIBIBYTES";
    /** UNIT_TEBIBYTES - Tebibytes (TiB). */
    UnitFormat[UnitFormat["UNIT_TEBIBYTES"] = 25] = "UNIT_TEBIBYTES";
    /** UNIT_PEBIBYTES - Pebibytes (PiB). */
    UnitFormat[UnitFormat["UNIT_PEBIBYTES"] = 26] = "UNIT_PEBIBYTES";
    /** UNIT_EXBIBYTES - Exbibytes (EiB). */
    UnitFormat[UnitFormat["UNIT_EXBIBYTES"] = 27] = "UNIT_EXBIBYTES";
    /** UNIT_REQUESTS_PER_SECOND - Requests per second (reqps). */
    UnitFormat[UnitFormat["UNIT_REQUESTS_PER_SECOND"] = 28] = "UNIT_REQUESTS_PER_SECOND";
    /** UNIT_OPERATIONS_PER_SECOND - Operations per second (ops). */
    UnitFormat[UnitFormat["UNIT_OPERATIONS_PER_SECOND"] = 29] = "UNIT_OPERATIONS_PER_SECOND";
    /** UNIT_WRITES_PER_SECOND - Writes per second (wps). */
    UnitFormat[UnitFormat["UNIT_WRITES_PER_SECOND"] = 30] = "UNIT_WRITES_PER_SECOND";
    /** UNIT_READS_PER_SECOND - Reads per second (rps). */
    UnitFormat[UnitFormat["UNIT_READS_PER_SECOND"] = 31] = "UNIT_READS_PER_SECOND";
    /** UNIT_PACKETS_PER_SECOND - Packets per second (pps). */
    UnitFormat[UnitFormat["UNIT_PACKETS_PER_SECOND"] = 32] = "UNIT_PACKETS_PER_SECOND";
    /** UNIT_IO_OPERATIONS_PER_SECOND - IO operations per second (iops). */
    UnitFormat[UnitFormat["UNIT_IO_OPERATIONS_PER_SECOND"] = 33] = "UNIT_IO_OPERATIONS_PER_SECOND";
    /** UNIT_COUNTS_PER_SECOND - Counts per second (counts/sec). */
    UnitFormat[UnitFormat["UNIT_COUNTS_PER_SECOND"] = 34] = "UNIT_COUNTS_PER_SECOND";
    /** UNIT_BITS_SI_PER_SECOND - Bits (SI) per second (bits/sec). */
    UnitFormat[UnitFormat["UNIT_BITS_SI_PER_SECOND"] = 35] = "UNIT_BITS_SI_PER_SECOND";
    /** UNIT_BYTES_SI_PER_SECOND - Bytes (SI) per second (bytes/sec). */
    UnitFormat[UnitFormat["UNIT_BYTES_SI_PER_SECOND"] = 36] = "UNIT_BYTES_SI_PER_SECOND";
    /** UNIT_KILOBITS_PER_SECOND - Kilobits per second (KBits/sec). */
    UnitFormat[UnitFormat["UNIT_KILOBITS_PER_SECOND"] = 37] = "UNIT_KILOBITS_PER_SECOND";
    /** UNIT_KILOBYTES_PER_SECOND - Kilobytes per second (KB/sec). */
    UnitFormat[UnitFormat["UNIT_KILOBYTES_PER_SECOND"] = 38] = "UNIT_KILOBYTES_PER_SECOND";
    /** UNIT_MEGABITS_PER_SECOND - Megabits per second (MBits/sec). */
    UnitFormat[UnitFormat["UNIT_MEGABITS_PER_SECOND"] = 39] = "UNIT_MEGABITS_PER_SECOND";
    /** UNIT_MEGABYTES_PER_SECOND - Megabytes per second (MB/sec). */
    UnitFormat[UnitFormat["UNIT_MEGABYTES_PER_SECOND"] = 40] = "UNIT_MEGABYTES_PER_SECOND";
    /** UNIT_GIGABITS_PER_SECOND - Gigabits per second (GBits/sec). */
    UnitFormat[UnitFormat["UNIT_GIGABITS_PER_SECOND"] = 41] = "UNIT_GIGABITS_PER_SECOND";
    /** UNIT_GIGABYTES_PER_SECOND - Gigabytes per second (GB/sec). */
    UnitFormat[UnitFormat["UNIT_GIGABYTES_PER_SECOND"] = 42] = "UNIT_GIGABYTES_PER_SECOND";
    /** UNIT_TERABITS_PER_SECOND - Terabits per second (TBits/sec). */
    UnitFormat[UnitFormat["UNIT_TERABITS_PER_SECOND"] = 43] = "UNIT_TERABITS_PER_SECOND";
    /** UNIT_TERABYTES_PER_SECOND - Terabytes per second (TB/sec). */
    UnitFormat[UnitFormat["UNIT_TERABYTES_PER_SECOND"] = 44] = "UNIT_TERABYTES_PER_SECOND";
    /** UNIT_PETABITS_PER_SECOND - Petabits per second (Pbits/sec). */
    UnitFormat[UnitFormat["UNIT_PETABITS_PER_SECOND"] = 45] = "UNIT_PETABITS_PER_SECOND";
    /** UNIT_PETABYTES_PER_SECOND - Petabytes per second (PB/sec). */
    UnitFormat[UnitFormat["UNIT_PETABYTES_PER_SECOND"] = 46] = "UNIT_PETABYTES_PER_SECOND";
    /** UNIT_BITS_IEC_PER_SECOND - Bits (IEC) per second (bits/sec). */
    UnitFormat[UnitFormat["UNIT_BITS_IEC_PER_SECOND"] = 47] = "UNIT_BITS_IEC_PER_SECOND";
    /** UNIT_BYTES_IEC_PER_SECOND - Bytes (IEC) per second (bytes/sec). */
    UnitFormat[UnitFormat["UNIT_BYTES_IEC_PER_SECOND"] = 48] = "UNIT_BYTES_IEC_PER_SECOND";
    /** UNIT_KIBIBITS_PER_SECOND - Kibibits per second (KiBits/sec). */
    UnitFormat[UnitFormat["UNIT_KIBIBITS_PER_SECOND"] = 49] = "UNIT_KIBIBITS_PER_SECOND";
    /** UNIT_KIBIBYTES_PER_SECOND - Kibibytes per second (KiB/sec). */
    UnitFormat[UnitFormat["UNIT_KIBIBYTES_PER_SECOND"] = 50] = "UNIT_KIBIBYTES_PER_SECOND";
    /** UNIT_MEBIBITS_PER_SECOND - Mebibits per second (MiBits/sec). */
    UnitFormat[UnitFormat["UNIT_MEBIBITS_PER_SECOND"] = 51] = "UNIT_MEBIBITS_PER_SECOND";
    /** UNIT_MEBIBYTES_PER_SECOND - Mebibytes per second (MiB/sec). */
    UnitFormat[UnitFormat["UNIT_MEBIBYTES_PER_SECOND"] = 52] = "UNIT_MEBIBYTES_PER_SECOND";
    /** UNIT_GIBIBITS_PER_SECOND - Gibibits per second (GiBits/sec). */
    UnitFormat[UnitFormat["UNIT_GIBIBITS_PER_SECOND"] = 53] = "UNIT_GIBIBITS_PER_SECOND";
    /** UNIT_GIBIBYTES_PER_SECOND - Gibibytes per second (GiB/sec). */
    UnitFormat[UnitFormat["UNIT_GIBIBYTES_PER_SECOND"] = 54] = "UNIT_GIBIBYTES_PER_SECOND";
    /** UNIT_TEBIBITS_PER_SECOND - Tebibits per second (TiBits/sec). */
    UnitFormat[UnitFormat["UNIT_TEBIBITS_PER_SECOND"] = 55] = "UNIT_TEBIBITS_PER_SECOND";
    /** UNIT_TEBIBYTES_PER_SECOND - Tebibytes per second (TiB/sec). */
    UnitFormat[UnitFormat["UNIT_TEBIBYTES_PER_SECOND"] = 56] = "UNIT_TEBIBYTES_PER_SECOND";
    /** UNIT_PEBIBITS_PER_SECOND - Pebibits per second (PiBits/sec). */
    UnitFormat[UnitFormat["UNIT_PEBIBITS_PER_SECOND"] = 57] = "UNIT_PEBIBITS_PER_SECOND";
    /** UNIT_PEBIBYTES_PER_SECOND - Pebibytes per second (PiB/sec). */
    UnitFormat[UnitFormat["UNIT_PEBIBYTES_PER_SECOND"] = 58] = "UNIT_PEBIBYTES_PER_SECOND";
    /** UNIT_DATETIME_UTC - Datetime (UTC). */
    UnitFormat[UnitFormat["UNIT_DATETIME_UTC"] = 59] = "UNIT_DATETIME_UTC";
    /** UNIT_DATETIME_LOCAL - Datetime (local). */
    UnitFormat[UnitFormat["UNIT_DATETIME_LOCAL"] = 60] = "UNIT_DATETIME_LOCAL";
    /** UNIT_HERTZ - Hertz (Hz). */
    UnitFormat[UnitFormat["UNIT_HERTZ"] = 61] = "UNIT_HERTZ";
    /** UNIT_KILOHERTZ - Kilohertz (KHz). */
    UnitFormat[UnitFormat["UNIT_KILOHERTZ"] = 62] = "UNIT_KILOHERTZ";
    /** UNIT_MEGAHERTZ - Megahertz (MHz). */
    UnitFormat[UnitFormat["UNIT_MEGAHERTZ"] = 63] = "UNIT_MEGAHERTZ";
    /** UNIT_GIGAHERTZ - Gigahertz (GHz). */
    UnitFormat[UnitFormat["UNIT_GIGAHERTZ"] = 64] = "UNIT_GIGAHERTZ";
    /** UNIT_DOLLAR - Dollar. */
    UnitFormat[UnitFormat["UNIT_DOLLAR"] = 65] = "UNIT_DOLLAR";
    /** UNIT_EURO - Euro. */
    UnitFormat[UnitFormat["UNIT_EURO"] = 66] = "UNIT_EURO";
    /** UNIT_ROUBLE - Rouble. */
    UnitFormat[UnitFormat["UNIT_ROUBLE"] = 67] = "UNIT_ROUBLE";
    /** UNIT_CELSIUS - Celsius (°C). */
    UnitFormat[UnitFormat["UNIT_CELSIUS"] = 68] = "UNIT_CELSIUS";
    /** UNIT_FAHRENHEIT - Fahrenheit (°F). */
    UnitFormat[UnitFormat["UNIT_FAHRENHEIT"] = 69] = "UNIT_FAHRENHEIT";
    /** UNIT_KELVIN - Kelvin (K). */
    UnitFormat[UnitFormat["UNIT_KELVIN"] = 70] = "UNIT_KELVIN";
    /** UNIT_FLOP_PER_SECOND - Flop per second (FLOP/sec). */
    UnitFormat[UnitFormat["UNIT_FLOP_PER_SECOND"] = 71] = "UNIT_FLOP_PER_SECOND";
    /** UNIT_KILOFLOP_PER_SECOND - Kiloflop per second (KFLOP/sec). */
    UnitFormat[UnitFormat["UNIT_KILOFLOP_PER_SECOND"] = 72] = "UNIT_KILOFLOP_PER_SECOND";
    /** UNIT_MEGAFLOP_PER_SECOND - Megaflop per second (MFLOP/sec). */
    UnitFormat[UnitFormat["UNIT_MEGAFLOP_PER_SECOND"] = 73] = "UNIT_MEGAFLOP_PER_SECOND";
    /** UNIT_GIGAFLOP_PER_SECOND - Gigaflop per second (GFLOP/sec). */
    UnitFormat[UnitFormat["UNIT_GIGAFLOP_PER_SECOND"] = 74] = "UNIT_GIGAFLOP_PER_SECOND";
    /** UNIT_PETAFLOP_PER_SECOND - Petaflop per second (PFLOP/sec). */
    UnitFormat[UnitFormat["UNIT_PETAFLOP_PER_SECOND"] = 75] = "UNIT_PETAFLOP_PER_SECOND";
    /** UNIT_EXAFLOP_PER_SECOND - Exaflop per second (EFLOP/sec). */
    UnitFormat[UnitFormat["UNIT_EXAFLOP_PER_SECOND"] = 76] = "UNIT_EXAFLOP_PER_SECOND";
    /** UNIT_METERS_PER_SECOND - Meters per second (m/sec). */
    UnitFormat[UnitFormat["UNIT_METERS_PER_SECOND"] = 77] = "UNIT_METERS_PER_SECOND";
    /** UNIT_KILOMETERS_PER_HOUR - Kilometers per hour (km/h). */
    UnitFormat[UnitFormat["UNIT_KILOMETERS_PER_HOUR"] = 78] = "UNIT_KILOMETERS_PER_HOUR";
    /** UNIT_MILES_PER_HOUR - Miles per hour (mi/h). */
    UnitFormat[UnitFormat["UNIT_MILES_PER_HOUR"] = 79] = "UNIT_MILES_PER_HOUR";
    /** UNIT_MILLIMETER - Millimeter. */
    UnitFormat[UnitFormat["UNIT_MILLIMETER"] = 80] = "UNIT_MILLIMETER";
    /** UNIT_CENTIMETER - Centimeter. */
    UnitFormat[UnitFormat["UNIT_CENTIMETER"] = 81] = "UNIT_CENTIMETER";
    /** UNIT_METER - Meter. */
    UnitFormat[UnitFormat["UNIT_METER"] = 82] = "UNIT_METER";
    /** UNIT_KILOMETER - Kilometer. */
    UnitFormat[UnitFormat["UNIT_KILOMETER"] = 83] = "UNIT_KILOMETER";
    /** UNIT_MILE - Mile. */
    UnitFormat[UnitFormat["UNIT_MILE"] = 84] = "UNIT_MILE";
    /** UNIT_PPM - Parts per million (ppm). */
    UnitFormat[UnitFormat["UNIT_PPM"] = 85] = "UNIT_PPM";
    /** UNIT_EVENTS_PER_SECOND - Events per second */
    UnitFormat[UnitFormat["UNIT_EVENTS_PER_SECOND"] = 86] = "UNIT_EVENTS_PER_SECOND";
    /** UNIT_PACKETS - Packets */
    UnitFormat[UnitFormat["UNIT_PACKETS"] = 87] = "UNIT_PACKETS";
    /** UNIT_DBM - dBm (dbm) */
    UnitFormat[UnitFormat["UNIT_DBM"] = 88] = "UNIT_DBM";
    /** UNIT_VIRTUAL_CPU - Virtual CPU cores based on CPU time (vcpu) */
    UnitFormat[UnitFormat["UNIT_VIRTUAL_CPU"] = 89] = "UNIT_VIRTUAL_CPU";
    /** UNIT_MESSAGES_PER_SECOND - Messages per second (mps) */
    UnitFormat[UnitFormat["UNIT_MESSAGES_PER_SECOND"] = 90] = "UNIT_MESSAGES_PER_SECOND";
    UnitFormat[UnitFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UnitFormat = exports.UnitFormat || (exports.UnitFormat = {}));
function unitFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "UNIT_FORMAT_UNSPECIFIED":
            return UnitFormat.UNIT_FORMAT_UNSPECIFIED;
        case 1:
        case "UNIT_NONE":
            return UnitFormat.UNIT_NONE;
        case 2:
        case "UNIT_COUNT":
            return UnitFormat.UNIT_COUNT;
        case 3:
        case "UNIT_PERCENT":
            return UnitFormat.UNIT_PERCENT;
        case 4:
        case "UNIT_PERCENT_UNIT":
            return UnitFormat.UNIT_PERCENT_UNIT;
        case 5:
        case "UNIT_NANOSECONDS":
            return UnitFormat.UNIT_NANOSECONDS;
        case 6:
        case "UNIT_MICROSECONDS":
            return UnitFormat.UNIT_MICROSECONDS;
        case 7:
        case "UNIT_MILLISECONDS":
            return UnitFormat.UNIT_MILLISECONDS;
        case 8:
        case "UNIT_SECONDS":
            return UnitFormat.UNIT_SECONDS;
        case 9:
        case "UNIT_MINUTES":
            return UnitFormat.UNIT_MINUTES;
        case 10:
        case "UNIT_HOURS":
            return UnitFormat.UNIT_HOURS;
        case 11:
        case "UNIT_DAYS":
            return UnitFormat.UNIT_DAYS;
        case 12:
        case "UNIT_BITS_SI":
            return UnitFormat.UNIT_BITS_SI;
        case 13:
        case "UNIT_BYTES_SI":
            return UnitFormat.UNIT_BYTES_SI;
        case 14:
        case "UNIT_KILOBYTES":
            return UnitFormat.UNIT_KILOBYTES;
        case 15:
        case "UNIT_MEGABYTES":
            return UnitFormat.UNIT_MEGABYTES;
        case 16:
        case "UNIT_GIGABYTES":
            return UnitFormat.UNIT_GIGABYTES;
        case 17:
        case "UNIT_TERABYTES":
            return UnitFormat.UNIT_TERABYTES;
        case 18:
        case "UNIT_PETABYTES":
            return UnitFormat.UNIT_PETABYTES;
        case 19:
        case "UNIT_EXABYTES":
            return UnitFormat.UNIT_EXABYTES;
        case 20:
        case "UNIT_BITS_IEC":
            return UnitFormat.UNIT_BITS_IEC;
        case 21:
        case "UNIT_BYTES_IEC":
            return UnitFormat.UNIT_BYTES_IEC;
        case 22:
        case "UNIT_KIBIBYTES":
            return UnitFormat.UNIT_KIBIBYTES;
        case 23:
        case "UNIT_MEBIBYTES":
            return UnitFormat.UNIT_MEBIBYTES;
        case 24:
        case "UNIT_GIBIBYTES":
            return UnitFormat.UNIT_GIBIBYTES;
        case 25:
        case "UNIT_TEBIBYTES":
            return UnitFormat.UNIT_TEBIBYTES;
        case 26:
        case "UNIT_PEBIBYTES":
            return UnitFormat.UNIT_PEBIBYTES;
        case 27:
        case "UNIT_EXBIBYTES":
            return UnitFormat.UNIT_EXBIBYTES;
        case 28:
        case "UNIT_REQUESTS_PER_SECOND":
            return UnitFormat.UNIT_REQUESTS_PER_SECOND;
        case 29:
        case "UNIT_OPERATIONS_PER_SECOND":
            return UnitFormat.UNIT_OPERATIONS_PER_SECOND;
        case 30:
        case "UNIT_WRITES_PER_SECOND":
            return UnitFormat.UNIT_WRITES_PER_SECOND;
        case 31:
        case "UNIT_READS_PER_SECOND":
            return UnitFormat.UNIT_READS_PER_SECOND;
        case 32:
        case "UNIT_PACKETS_PER_SECOND":
            return UnitFormat.UNIT_PACKETS_PER_SECOND;
        case 33:
        case "UNIT_IO_OPERATIONS_PER_SECOND":
            return UnitFormat.UNIT_IO_OPERATIONS_PER_SECOND;
        case 34:
        case "UNIT_COUNTS_PER_SECOND":
            return UnitFormat.UNIT_COUNTS_PER_SECOND;
        case 35:
        case "UNIT_BITS_SI_PER_SECOND":
            return UnitFormat.UNIT_BITS_SI_PER_SECOND;
        case 36:
        case "UNIT_BYTES_SI_PER_SECOND":
            return UnitFormat.UNIT_BYTES_SI_PER_SECOND;
        case 37:
        case "UNIT_KILOBITS_PER_SECOND":
            return UnitFormat.UNIT_KILOBITS_PER_SECOND;
        case 38:
        case "UNIT_KILOBYTES_PER_SECOND":
            return UnitFormat.UNIT_KILOBYTES_PER_SECOND;
        case 39:
        case "UNIT_MEGABITS_PER_SECOND":
            return UnitFormat.UNIT_MEGABITS_PER_SECOND;
        case 40:
        case "UNIT_MEGABYTES_PER_SECOND":
            return UnitFormat.UNIT_MEGABYTES_PER_SECOND;
        case 41:
        case "UNIT_GIGABITS_PER_SECOND":
            return UnitFormat.UNIT_GIGABITS_PER_SECOND;
        case 42:
        case "UNIT_GIGABYTES_PER_SECOND":
            return UnitFormat.UNIT_GIGABYTES_PER_SECOND;
        case 43:
        case "UNIT_TERABITS_PER_SECOND":
            return UnitFormat.UNIT_TERABITS_PER_SECOND;
        case 44:
        case "UNIT_TERABYTES_PER_SECOND":
            return UnitFormat.UNIT_TERABYTES_PER_SECOND;
        case 45:
        case "UNIT_PETABITS_PER_SECOND":
            return UnitFormat.UNIT_PETABITS_PER_SECOND;
        case 46:
        case "UNIT_PETABYTES_PER_SECOND":
            return UnitFormat.UNIT_PETABYTES_PER_SECOND;
        case 47:
        case "UNIT_BITS_IEC_PER_SECOND":
            return UnitFormat.UNIT_BITS_IEC_PER_SECOND;
        case 48:
        case "UNIT_BYTES_IEC_PER_SECOND":
            return UnitFormat.UNIT_BYTES_IEC_PER_SECOND;
        case 49:
        case "UNIT_KIBIBITS_PER_SECOND":
            return UnitFormat.UNIT_KIBIBITS_PER_SECOND;
        case 50:
        case "UNIT_KIBIBYTES_PER_SECOND":
            return UnitFormat.UNIT_KIBIBYTES_PER_SECOND;
        case 51:
        case "UNIT_MEBIBITS_PER_SECOND":
            return UnitFormat.UNIT_MEBIBITS_PER_SECOND;
        case 52:
        case "UNIT_MEBIBYTES_PER_SECOND":
            return UnitFormat.UNIT_MEBIBYTES_PER_SECOND;
        case 53:
        case "UNIT_GIBIBITS_PER_SECOND":
            return UnitFormat.UNIT_GIBIBITS_PER_SECOND;
        case 54:
        case "UNIT_GIBIBYTES_PER_SECOND":
            return UnitFormat.UNIT_GIBIBYTES_PER_SECOND;
        case 55:
        case "UNIT_TEBIBITS_PER_SECOND":
            return UnitFormat.UNIT_TEBIBITS_PER_SECOND;
        case 56:
        case "UNIT_TEBIBYTES_PER_SECOND":
            return UnitFormat.UNIT_TEBIBYTES_PER_SECOND;
        case 57:
        case "UNIT_PEBIBITS_PER_SECOND":
            return UnitFormat.UNIT_PEBIBITS_PER_SECOND;
        case 58:
        case "UNIT_PEBIBYTES_PER_SECOND":
            return UnitFormat.UNIT_PEBIBYTES_PER_SECOND;
        case 59:
        case "UNIT_DATETIME_UTC":
            return UnitFormat.UNIT_DATETIME_UTC;
        case 60:
        case "UNIT_DATETIME_LOCAL":
            return UnitFormat.UNIT_DATETIME_LOCAL;
        case 61:
        case "UNIT_HERTZ":
            return UnitFormat.UNIT_HERTZ;
        case 62:
        case "UNIT_KILOHERTZ":
            return UnitFormat.UNIT_KILOHERTZ;
        case 63:
        case "UNIT_MEGAHERTZ":
            return UnitFormat.UNIT_MEGAHERTZ;
        case 64:
        case "UNIT_GIGAHERTZ":
            return UnitFormat.UNIT_GIGAHERTZ;
        case 65:
        case "UNIT_DOLLAR":
            return UnitFormat.UNIT_DOLLAR;
        case 66:
        case "UNIT_EURO":
            return UnitFormat.UNIT_EURO;
        case 67:
        case "UNIT_ROUBLE":
            return UnitFormat.UNIT_ROUBLE;
        case 68:
        case "UNIT_CELSIUS":
            return UnitFormat.UNIT_CELSIUS;
        case 69:
        case "UNIT_FAHRENHEIT":
            return UnitFormat.UNIT_FAHRENHEIT;
        case 70:
        case "UNIT_KELVIN":
            return UnitFormat.UNIT_KELVIN;
        case 71:
        case "UNIT_FLOP_PER_SECOND":
            return UnitFormat.UNIT_FLOP_PER_SECOND;
        case 72:
        case "UNIT_KILOFLOP_PER_SECOND":
            return UnitFormat.UNIT_KILOFLOP_PER_SECOND;
        case 73:
        case "UNIT_MEGAFLOP_PER_SECOND":
            return UnitFormat.UNIT_MEGAFLOP_PER_SECOND;
        case 74:
        case "UNIT_GIGAFLOP_PER_SECOND":
            return UnitFormat.UNIT_GIGAFLOP_PER_SECOND;
        case 75:
        case "UNIT_PETAFLOP_PER_SECOND":
            return UnitFormat.UNIT_PETAFLOP_PER_SECOND;
        case 76:
        case "UNIT_EXAFLOP_PER_SECOND":
            return UnitFormat.UNIT_EXAFLOP_PER_SECOND;
        case 77:
        case "UNIT_METERS_PER_SECOND":
            return UnitFormat.UNIT_METERS_PER_SECOND;
        case 78:
        case "UNIT_KILOMETERS_PER_HOUR":
            return UnitFormat.UNIT_KILOMETERS_PER_HOUR;
        case 79:
        case "UNIT_MILES_PER_HOUR":
            return UnitFormat.UNIT_MILES_PER_HOUR;
        case 80:
        case "UNIT_MILLIMETER":
            return UnitFormat.UNIT_MILLIMETER;
        case 81:
        case "UNIT_CENTIMETER":
            return UnitFormat.UNIT_CENTIMETER;
        case 82:
        case "UNIT_METER":
            return UnitFormat.UNIT_METER;
        case 83:
        case "UNIT_KILOMETER":
            return UnitFormat.UNIT_KILOMETER;
        case 84:
        case "UNIT_MILE":
            return UnitFormat.UNIT_MILE;
        case 85:
        case "UNIT_PPM":
            return UnitFormat.UNIT_PPM;
        case 86:
        case "UNIT_EVENTS_PER_SECOND":
            return UnitFormat.UNIT_EVENTS_PER_SECOND;
        case 87:
        case "UNIT_PACKETS":
            return UnitFormat.UNIT_PACKETS;
        case 88:
        case "UNIT_DBM":
            return UnitFormat.UNIT_DBM;
        case 89:
        case "UNIT_VIRTUAL_CPU":
            return UnitFormat.UNIT_VIRTUAL_CPU;
        case 90:
        case "UNIT_MESSAGES_PER_SECOND":
            return UnitFormat.UNIT_MESSAGES_PER_SECOND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UnitFormat.UNRECOGNIZED;
    }
}
exports.unitFormatFromJSON = unitFormatFromJSON;
function unitFormatToJSON(object) {
    switch (object) {
        case UnitFormat.UNIT_FORMAT_UNSPECIFIED:
            return "UNIT_FORMAT_UNSPECIFIED";
        case UnitFormat.UNIT_NONE:
            return "UNIT_NONE";
        case UnitFormat.UNIT_COUNT:
            return "UNIT_COUNT";
        case UnitFormat.UNIT_PERCENT:
            return "UNIT_PERCENT";
        case UnitFormat.UNIT_PERCENT_UNIT:
            return "UNIT_PERCENT_UNIT";
        case UnitFormat.UNIT_NANOSECONDS:
            return "UNIT_NANOSECONDS";
        case UnitFormat.UNIT_MICROSECONDS:
            return "UNIT_MICROSECONDS";
        case UnitFormat.UNIT_MILLISECONDS:
            return "UNIT_MILLISECONDS";
        case UnitFormat.UNIT_SECONDS:
            return "UNIT_SECONDS";
        case UnitFormat.UNIT_MINUTES:
            return "UNIT_MINUTES";
        case UnitFormat.UNIT_HOURS:
            return "UNIT_HOURS";
        case UnitFormat.UNIT_DAYS:
            return "UNIT_DAYS";
        case UnitFormat.UNIT_BITS_SI:
            return "UNIT_BITS_SI";
        case UnitFormat.UNIT_BYTES_SI:
            return "UNIT_BYTES_SI";
        case UnitFormat.UNIT_KILOBYTES:
            return "UNIT_KILOBYTES";
        case UnitFormat.UNIT_MEGABYTES:
            return "UNIT_MEGABYTES";
        case UnitFormat.UNIT_GIGABYTES:
            return "UNIT_GIGABYTES";
        case UnitFormat.UNIT_TERABYTES:
            return "UNIT_TERABYTES";
        case UnitFormat.UNIT_PETABYTES:
            return "UNIT_PETABYTES";
        case UnitFormat.UNIT_EXABYTES:
            return "UNIT_EXABYTES";
        case UnitFormat.UNIT_BITS_IEC:
            return "UNIT_BITS_IEC";
        case UnitFormat.UNIT_BYTES_IEC:
            return "UNIT_BYTES_IEC";
        case UnitFormat.UNIT_KIBIBYTES:
            return "UNIT_KIBIBYTES";
        case UnitFormat.UNIT_MEBIBYTES:
            return "UNIT_MEBIBYTES";
        case UnitFormat.UNIT_GIBIBYTES:
            return "UNIT_GIBIBYTES";
        case UnitFormat.UNIT_TEBIBYTES:
            return "UNIT_TEBIBYTES";
        case UnitFormat.UNIT_PEBIBYTES:
            return "UNIT_PEBIBYTES";
        case UnitFormat.UNIT_EXBIBYTES:
            return "UNIT_EXBIBYTES";
        case UnitFormat.UNIT_REQUESTS_PER_SECOND:
            return "UNIT_REQUESTS_PER_SECOND";
        case UnitFormat.UNIT_OPERATIONS_PER_SECOND:
            return "UNIT_OPERATIONS_PER_SECOND";
        case UnitFormat.UNIT_WRITES_PER_SECOND:
            return "UNIT_WRITES_PER_SECOND";
        case UnitFormat.UNIT_READS_PER_SECOND:
            return "UNIT_READS_PER_SECOND";
        case UnitFormat.UNIT_PACKETS_PER_SECOND:
            return "UNIT_PACKETS_PER_SECOND";
        case UnitFormat.UNIT_IO_OPERATIONS_PER_SECOND:
            return "UNIT_IO_OPERATIONS_PER_SECOND";
        case UnitFormat.UNIT_COUNTS_PER_SECOND:
            return "UNIT_COUNTS_PER_SECOND";
        case UnitFormat.UNIT_BITS_SI_PER_SECOND:
            return "UNIT_BITS_SI_PER_SECOND";
        case UnitFormat.UNIT_BYTES_SI_PER_SECOND:
            return "UNIT_BYTES_SI_PER_SECOND";
        case UnitFormat.UNIT_KILOBITS_PER_SECOND:
            return "UNIT_KILOBITS_PER_SECOND";
        case UnitFormat.UNIT_KILOBYTES_PER_SECOND:
            return "UNIT_KILOBYTES_PER_SECOND";
        case UnitFormat.UNIT_MEGABITS_PER_SECOND:
            return "UNIT_MEGABITS_PER_SECOND";
        case UnitFormat.UNIT_MEGABYTES_PER_SECOND:
            return "UNIT_MEGABYTES_PER_SECOND";
        case UnitFormat.UNIT_GIGABITS_PER_SECOND:
            return "UNIT_GIGABITS_PER_SECOND";
        case UnitFormat.UNIT_GIGABYTES_PER_SECOND:
            return "UNIT_GIGABYTES_PER_SECOND";
        case UnitFormat.UNIT_TERABITS_PER_SECOND:
            return "UNIT_TERABITS_PER_SECOND";
        case UnitFormat.UNIT_TERABYTES_PER_SECOND:
            return "UNIT_TERABYTES_PER_SECOND";
        case UnitFormat.UNIT_PETABITS_PER_SECOND:
            return "UNIT_PETABITS_PER_SECOND";
        case UnitFormat.UNIT_PETABYTES_PER_SECOND:
            return "UNIT_PETABYTES_PER_SECOND";
        case UnitFormat.UNIT_BITS_IEC_PER_SECOND:
            return "UNIT_BITS_IEC_PER_SECOND";
        case UnitFormat.UNIT_BYTES_IEC_PER_SECOND:
            return "UNIT_BYTES_IEC_PER_SECOND";
        case UnitFormat.UNIT_KIBIBITS_PER_SECOND:
            return "UNIT_KIBIBITS_PER_SECOND";
        case UnitFormat.UNIT_KIBIBYTES_PER_SECOND:
            return "UNIT_KIBIBYTES_PER_SECOND";
        case UnitFormat.UNIT_MEBIBITS_PER_SECOND:
            return "UNIT_MEBIBITS_PER_SECOND";
        case UnitFormat.UNIT_MEBIBYTES_PER_SECOND:
            return "UNIT_MEBIBYTES_PER_SECOND";
        case UnitFormat.UNIT_GIBIBITS_PER_SECOND:
            return "UNIT_GIBIBITS_PER_SECOND";
        case UnitFormat.UNIT_GIBIBYTES_PER_SECOND:
            return "UNIT_GIBIBYTES_PER_SECOND";
        case UnitFormat.UNIT_TEBIBITS_PER_SECOND:
            return "UNIT_TEBIBITS_PER_SECOND";
        case UnitFormat.UNIT_TEBIBYTES_PER_SECOND:
            return "UNIT_TEBIBYTES_PER_SECOND";
        case UnitFormat.UNIT_PEBIBITS_PER_SECOND:
            return "UNIT_PEBIBITS_PER_SECOND";
        case UnitFormat.UNIT_PEBIBYTES_PER_SECOND:
            return "UNIT_PEBIBYTES_PER_SECOND";
        case UnitFormat.UNIT_DATETIME_UTC:
            return "UNIT_DATETIME_UTC";
        case UnitFormat.UNIT_DATETIME_LOCAL:
            return "UNIT_DATETIME_LOCAL";
        case UnitFormat.UNIT_HERTZ:
            return "UNIT_HERTZ";
        case UnitFormat.UNIT_KILOHERTZ:
            return "UNIT_KILOHERTZ";
        case UnitFormat.UNIT_MEGAHERTZ:
            return "UNIT_MEGAHERTZ";
        case UnitFormat.UNIT_GIGAHERTZ:
            return "UNIT_GIGAHERTZ";
        case UnitFormat.UNIT_DOLLAR:
            return "UNIT_DOLLAR";
        case UnitFormat.UNIT_EURO:
            return "UNIT_EURO";
        case UnitFormat.UNIT_ROUBLE:
            return "UNIT_ROUBLE";
        case UnitFormat.UNIT_CELSIUS:
            return "UNIT_CELSIUS";
        case UnitFormat.UNIT_FAHRENHEIT:
            return "UNIT_FAHRENHEIT";
        case UnitFormat.UNIT_KELVIN:
            return "UNIT_KELVIN";
        case UnitFormat.UNIT_FLOP_PER_SECOND:
            return "UNIT_FLOP_PER_SECOND";
        case UnitFormat.UNIT_KILOFLOP_PER_SECOND:
            return "UNIT_KILOFLOP_PER_SECOND";
        case UnitFormat.UNIT_MEGAFLOP_PER_SECOND:
            return "UNIT_MEGAFLOP_PER_SECOND";
        case UnitFormat.UNIT_GIGAFLOP_PER_SECOND:
            return "UNIT_GIGAFLOP_PER_SECOND";
        case UnitFormat.UNIT_PETAFLOP_PER_SECOND:
            return "UNIT_PETAFLOP_PER_SECOND";
        case UnitFormat.UNIT_EXAFLOP_PER_SECOND:
            return "UNIT_EXAFLOP_PER_SECOND";
        case UnitFormat.UNIT_METERS_PER_SECOND:
            return "UNIT_METERS_PER_SECOND";
        case UnitFormat.UNIT_KILOMETERS_PER_HOUR:
            return "UNIT_KILOMETERS_PER_HOUR";
        case UnitFormat.UNIT_MILES_PER_HOUR:
            return "UNIT_MILES_PER_HOUR";
        case UnitFormat.UNIT_MILLIMETER:
            return "UNIT_MILLIMETER";
        case UnitFormat.UNIT_CENTIMETER:
            return "UNIT_CENTIMETER";
        case UnitFormat.UNIT_METER:
            return "UNIT_METER";
        case UnitFormat.UNIT_KILOMETER:
            return "UNIT_KILOMETER";
        case UnitFormat.UNIT_MILE:
            return "UNIT_MILE";
        case UnitFormat.UNIT_PPM:
            return "UNIT_PPM";
        case UnitFormat.UNIT_EVENTS_PER_SECOND:
            return "UNIT_EVENTS_PER_SECOND";
        case UnitFormat.UNIT_PACKETS:
            return "UNIT_PACKETS";
        case UnitFormat.UNIT_DBM:
            return "UNIT_DBM";
        case UnitFormat.UNIT_VIRTUAL_CPU:
            return "UNIT_VIRTUAL_CPU";
        case UnitFormat.UNIT_MESSAGES_PER_SECOND:
            return "UNIT_MESSAGES_PER_SECOND";
        default:
            return "UNKNOWN";
    }
}
exports.unitFormatToJSON = unitFormatToJSON;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
