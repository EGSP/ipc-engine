export declare const protobufPackage = "yandex.cloud.monitoring.v3";
export declare enum UnitFormat {
    UNIT_FORMAT_UNSPECIFIED = 0,
    /** UNIT_NONE - None (show tick values as-is). */
    UNIT_NONE = 1,
    /** UNIT_COUNT - Count. */
    UNIT_COUNT = 2,
    /** UNIT_PERCENT - Percent (0-100). */
    UNIT_PERCENT = 3,
    /** UNIT_PERCENT_UNIT - Percent (0-1). */
    UNIT_PERCENT_UNIT = 4,
    /** UNIT_NANOSECONDS - Nanoseconds (ns). */
    UNIT_NANOSECONDS = 5,
    /** UNIT_MICROSECONDS - Microseconds (µs). */
    UNIT_MICROSECONDS = 6,
    /** UNIT_MILLISECONDS - Milliseconds (ms). */
    UNIT_MILLISECONDS = 7,
    /** UNIT_SECONDS - Seconds (s). */
    UNIT_SECONDS = 8,
    /** UNIT_MINUTES - Minutes (m). */
    UNIT_MINUTES = 9,
    /** UNIT_HOURS - Hours (h). */
    UNIT_HOURS = 10,
    /** UNIT_DAYS - Days (d). */
    UNIT_DAYS = 11,
    /** UNIT_BITS_SI - Bits (SI). */
    UNIT_BITS_SI = 12,
    /** UNIT_BYTES_SI - Bytes (SI). */
    UNIT_BYTES_SI = 13,
    /** UNIT_KILOBYTES - Kilobytes (KB). */
    UNIT_KILOBYTES = 14,
    /** UNIT_MEGABYTES - Megabytes (MB). */
    UNIT_MEGABYTES = 15,
    /** UNIT_GIGABYTES - Gigabytes (GB). */
    UNIT_GIGABYTES = 16,
    /** UNIT_TERABYTES - Terabytes (TB) */
    UNIT_TERABYTES = 17,
    /** UNIT_PETABYTES - Petabytes (PB). */
    UNIT_PETABYTES = 18,
    /** UNIT_EXABYTES - Exabytes (EB). */
    UNIT_EXABYTES = 19,
    /** UNIT_BITS_IEC - Bits (IEC). */
    UNIT_BITS_IEC = 20,
    /** UNIT_BYTES_IEC - Bytes (IEC). */
    UNIT_BYTES_IEC = 21,
    /** UNIT_KIBIBYTES - Kibibytes (KiB). */
    UNIT_KIBIBYTES = 22,
    /** UNIT_MEBIBYTES - Mebibytes (MiB). */
    UNIT_MEBIBYTES = 23,
    /** UNIT_GIBIBYTES - Gigibytes (GiB). */
    UNIT_GIBIBYTES = 24,
    /** UNIT_TEBIBYTES - Tebibytes (TiB). */
    UNIT_TEBIBYTES = 25,
    /** UNIT_PEBIBYTES - Pebibytes (PiB). */
    UNIT_PEBIBYTES = 26,
    /** UNIT_EXBIBYTES - Exbibytes (EiB). */
    UNIT_EXBIBYTES = 27,
    /** UNIT_REQUESTS_PER_SECOND - Requests per second (reqps). */
    UNIT_REQUESTS_PER_SECOND = 28,
    /** UNIT_OPERATIONS_PER_SECOND - Operations per second (ops). */
    UNIT_OPERATIONS_PER_SECOND = 29,
    /** UNIT_WRITES_PER_SECOND - Writes per second (wps). */
    UNIT_WRITES_PER_SECOND = 30,
    /** UNIT_READS_PER_SECOND - Reads per second (rps). */
    UNIT_READS_PER_SECOND = 31,
    /** UNIT_PACKETS_PER_SECOND - Packets per second (pps). */
    UNIT_PACKETS_PER_SECOND = 32,
    /** UNIT_IO_OPERATIONS_PER_SECOND - IO operations per second (iops). */
    UNIT_IO_OPERATIONS_PER_SECOND = 33,
    /** UNIT_COUNTS_PER_SECOND - Counts per second (counts/sec). */
    UNIT_COUNTS_PER_SECOND = 34,
    /** UNIT_BITS_SI_PER_SECOND - Bits (SI) per second (bits/sec). */
    UNIT_BITS_SI_PER_SECOND = 35,
    /** UNIT_BYTES_SI_PER_SECOND - Bytes (SI) per second (bytes/sec). */
    UNIT_BYTES_SI_PER_SECOND = 36,
    /** UNIT_KILOBITS_PER_SECOND - Kilobits per second (KBits/sec). */
    UNIT_KILOBITS_PER_SECOND = 37,
    /** UNIT_KILOBYTES_PER_SECOND - Kilobytes per second (KB/sec). */
    UNIT_KILOBYTES_PER_SECOND = 38,
    /** UNIT_MEGABITS_PER_SECOND - Megabits per second (MBits/sec). */
    UNIT_MEGABITS_PER_SECOND = 39,
    /** UNIT_MEGABYTES_PER_SECOND - Megabytes per second (MB/sec). */
    UNIT_MEGABYTES_PER_SECOND = 40,
    /** UNIT_GIGABITS_PER_SECOND - Gigabits per second (GBits/sec). */
    UNIT_GIGABITS_PER_SECOND = 41,
    /** UNIT_GIGABYTES_PER_SECOND - Gigabytes per second (GB/sec). */
    UNIT_GIGABYTES_PER_SECOND = 42,
    /** UNIT_TERABITS_PER_SECOND - Terabits per second (TBits/sec). */
    UNIT_TERABITS_PER_SECOND = 43,
    /** UNIT_TERABYTES_PER_SECOND - Terabytes per second (TB/sec). */
    UNIT_TERABYTES_PER_SECOND = 44,
    /** UNIT_PETABITS_PER_SECOND - Petabits per second (Pbits/sec). */
    UNIT_PETABITS_PER_SECOND = 45,
    /** UNIT_PETABYTES_PER_SECOND - Petabytes per second (PB/sec). */
    UNIT_PETABYTES_PER_SECOND = 46,
    /** UNIT_BITS_IEC_PER_SECOND - Bits (IEC) per second (bits/sec). */
    UNIT_BITS_IEC_PER_SECOND = 47,
    /** UNIT_BYTES_IEC_PER_SECOND - Bytes (IEC) per second (bytes/sec). */
    UNIT_BYTES_IEC_PER_SECOND = 48,
    /** UNIT_KIBIBITS_PER_SECOND - Kibibits per second (KiBits/sec). */
    UNIT_KIBIBITS_PER_SECOND = 49,
    /** UNIT_KIBIBYTES_PER_SECOND - Kibibytes per second (KiB/sec). */
    UNIT_KIBIBYTES_PER_SECOND = 50,
    /** UNIT_MEBIBITS_PER_SECOND - Mebibits per second (MiBits/sec). */
    UNIT_MEBIBITS_PER_SECOND = 51,
    /** UNIT_MEBIBYTES_PER_SECOND - Mebibytes per second (MiB/sec). */
    UNIT_MEBIBYTES_PER_SECOND = 52,
    /** UNIT_GIBIBITS_PER_SECOND - Gibibits per second (GiBits/sec). */
    UNIT_GIBIBITS_PER_SECOND = 53,
    /** UNIT_GIBIBYTES_PER_SECOND - Gibibytes per second (GiB/sec). */
    UNIT_GIBIBYTES_PER_SECOND = 54,
    /** UNIT_TEBIBITS_PER_SECOND - Tebibits per second (TiBits/sec). */
    UNIT_TEBIBITS_PER_SECOND = 55,
    /** UNIT_TEBIBYTES_PER_SECOND - Tebibytes per second (TiB/sec). */
    UNIT_TEBIBYTES_PER_SECOND = 56,
    /** UNIT_PEBIBITS_PER_SECOND - Pebibits per second (PiBits/sec). */
    UNIT_PEBIBITS_PER_SECOND = 57,
    /** UNIT_PEBIBYTES_PER_SECOND - Pebibytes per second (PiB/sec). */
    UNIT_PEBIBYTES_PER_SECOND = 58,
    /** UNIT_DATETIME_UTC - Datetime (UTC). */
    UNIT_DATETIME_UTC = 59,
    /** UNIT_DATETIME_LOCAL - Datetime (local). */
    UNIT_DATETIME_LOCAL = 60,
    /** UNIT_HERTZ - Hertz (Hz). */
    UNIT_HERTZ = 61,
    /** UNIT_KILOHERTZ - Kilohertz (KHz). */
    UNIT_KILOHERTZ = 62,
    /** UNIT_MEGAHERTZ - Megahertz (MHz). */
    UNIT_MEGAHERTZ = 63,
    /** UNIT_GIGAHERTZ - Gigahertz (GHz). */
    UNIT_GIGAHERTZ = 64,
    /** UNIT_DOLLAR - Dollar. */
    UNIT_DOLLAR = 65,
    /** UNIT_EURO - Euro. */
    UNIT_EURO = 66,
    /** UNIT_ROUBLE - Rouble. */
    UNIT_ROUBLE = 67,
    /** UNIT_CELSIUS - Celsius (°C). */
    UNIT_CELSIUS = 68,
    /** UNIT_FAHRENHEIT - Fahrenheit (°F). */
    UNIT_FAHRENHEIT = 69,
    /** UNIT_KELVIN - Kelvin (K). */
    UNIT_KELVIN = 70,
    /** UNIT_FLOP_PER_SECOND - Flop per second (FLOP/sec). */
    UNIT_FLOP_PER_SECOND = 71,
    /** UNIT_KILOFLOP_PER_SECOND - Kiloflop per second (KFLOP/sec). */
    UNIT_KILOFLOP_PER_SECOND = 72,
    /** UNIT_MEGAFLOP_PER_SECOND - Megaflop per second (MFLOP/sec). */
    UNIT_MEGAFLOP_PER_SECOND = 73,
    /** UNIT_GIGAFLOP_PER_SECOND - Gigaflop per second (GFLOP/sec). */
    UNIT_GIGAFLOP_PER_SECOND = 74,
    /** UNIT_PETAFLOP_PER_SECOND - Petaflop per second (PFLOP/sec). */
    UNIT_PETAFLOP_PER_SECOND = 75,
    /** UNIT_EXAFLOP_PER_SECOND - Exaflop per second (EFLOP/sec). */
    UNIT_EXAFLOP_PER_SECOND = 76,
    /** UNIT_METERS_PER_SECOND - Meters per second (m/sec). */
    UNIT_METERS_PER_SECOND = 77,
    /** UNIT_KILOMETERS_PER_HOUR - Kilometers per hour (km/h). */
    UNIT_KILOMETERS_PER_HOUR = 78,
    /** UNIT_MILES_PER_HOUR - Miles per hour (mi/h). */
    UNIT_MILES_PER_HOUR = 79,
    /** UNIT_MILLIMETER - Millimeter. */
    UNIT_MILLIMETER = 80,
    /** UNIT_CENTIMETER - Centimeter. */
    UNIT_CENTIMETER = 81,
    /** UNIT_METER - Meter. */
    UNIT_METER = 82,
    /** UNIT_KILOMETER - Kilometer. */
    UNIT_KILOMETER = 83,
    /** UNIT_MILE - Mile. */
    UNIT_MILE = 84,
    /** UNIT_PPM - Parts per million (ppm). */
    UNIT_PPM = 85,
    /** UNIT_EVENTS_PER_SECOND - Events per second */
    UNIT_EVENTS_PER_SECOND = 86,
    /** UNIT_PACKETS - Packets */
    UNIT_PACKETS = 87,
    /** UNIT_DBM - dBm (dbm) */
    UNIT_DBM = 88,
    /** UNIT_VIRTUAL_CPU - Virtual CPU cores based on CPU time (vcpu) */
    UNIT_VIRTUAL_CPU = 89,
    /** UNIT_MESSAGES_PER_SECOND - Messages per second (mps) */
    UNIT_MESSAGES_PER_SECOND = 90,
    UNRECOGNIZED = -1
}
export declare function unitFormatFromJSON(object: any): UnitFormat;
export declare function unitFormatToJSON(object: UnitFormat): string;
