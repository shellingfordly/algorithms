import { longestSubarray1 } from "./longestSubarray1438"

describe("longestSubarray1", () => {
    // it("1", () => {
    //     expect(longestSubarray1([8, 2, 4, 7], 4)).toBe(2)
    // })
    // it("2", () => {
    //     expect(longestSubarray1([10, 1, 2, 4, 7, 2], 5)).toBe(4)
    // })
    it("3", () => {
        expect(longestSubarray1([4, 2, 2, 2, 4, 4, 2, 2], 0)).toBe(3)
    })
    // it("4", () => {
    //     const arr = [102, 31, 431, 85, 192, 985, 56, 92, 826, 46, 97, 916, 326, 436, 53, 1214, 4117, 3497, 123, 876, 910, 61, 47, 287, 947, 987, 26]
    //     expect(longestSubarray1(arr, 300)).toBe(3)
    // })
    // it("5", () => {
    //     const arr = [927, 215, 545, 502, 481, 443, 990, 898, 93, 938, 15, 14, 427, 544, 910, 609, 773, 854, 362, 214, 993, 826, 641, 299, 432, 732, 972, 911, 659, 580, 730, 814, 1, 698, 971, 158, 822, 232, 767, 539, 796, 998, 696, 338, 458, 822, 746, 10, 251, 138, 185, 335, 712, 928, 139, 437, 813, 46, 877, 245, 309, 898, 402, 907, 276, 97, 314, 903, 235, 789, 882, 256, 75, 117, 869, 293, 491, 509, 14, 717, 304, 620, 111, 123, 120, 664, 437, 976, 700, 994, 517, 638, 313, 888, 137, 22, 390, 562, 41, 321, 488, 156, 536, 275, 380, 999, 364, 905, 820, 8, 646, 694, 998, 637, 896, 138, 292, 480, 911, 595, 965, 874, 80, 864, 452, 251, 715, 650, 674, 714, 487, 511, 578, 570, 264, 554, 81, 46, 272, 34, 844, 574, 157, 577, 628, 404, 189, 764, 937, 452, 78, 382, 693, 93, 718, 843, 501, 103, 78, 740, 868, 949, 467, 688, 565, 430, 663, 825, 448, 719, 29, 898, 703, 141, 453, 567, 846, 279, 921, 203, 539, 879, 120, 84, 567, 15, 105, 900, 796, 966, 762, 197, 745, 485, 788, 526, 668, 946, 778, 408, 950, 957, 47, 858, 148, 485, 366, 180, 712, 245, 831, 971, 825, 549, 732, 867, 571, 429, 577, 95, 627, 665, 512, 946, 658, 516, 239, 574, 785, 349, 264, 718, 784, 550, 642, 47, 715, 5, 907, 807, 638, 434, 535, 730, 781, 174, 522, 405, 44, 267, 531, 107, 123, 257, 621, 729, 136, 209, 82, 695, 474, 363, 928, 123, 348, 23, 247, 241, 854, 827, 269, 155, 973, 774, 657, 584, 110, 963, 372, 776, 236, 689, 727, 567, 967, 403, 184, 324, 209, 652, 990, 40, 194, 894, 746, 264, 33, 675, 277, 276, 20, 851, 215, 597, 285, 373, 446, 238, 354, 878, 654, 857, 959, 828, 844, 664, 844, 944, 58, 328, 639, 263, 227, 496, 475, 658, 927, 314, 855, 294, 432, 149, 53, 57, 583, 417, 193, 30, 427, 409, 666, 963, 463, 814, 817, 199, 10, 451, 828, 87, 190, 505, 84, 363, 244, 951, 255, 982, 33, 636, 968, 445, 405, 582, 979, 430, 603, 699, 349, 860, 39, 773, 873, 914, 938, 146, 44, 767, 867, 401, 595, 414, 485, 442, 122, 857, 991, 432, 435, 943, 521, 805, 875, 710, 809, 156, 4, 779, 57, 460, 921, 37, 757, 348, 547, 738, 889, 652, 175, 805, 294, 904, 485, 32, 407, 352, 107, 34, 877, 335, 807, 263, 277, 493, 526, 162, 255, 854, 686, 446, 567, 445, 428, 781, 203, 730, 849, 399, 468, 630, 951, 54, 71, 245, 644, 808, 703, 924, 317, 738, 769, 510, 661, 906, 920, 845, 90, 578, 807, 580, 223, 916, 868, 956, 808, 758, 71, 476, 334, 469, 139, 800, 450, 962, 423, 680, 346, 2, 810, 881, 764, 681, 853, 132, 798, 853, 190, 590, 108, 852, 831, 604, 962, 678, 541, 322, 651, 23, 119, 437, 275, 34, 479, 583, 384, 796, 812, 998, 317, 41, 485, 659, 166, 986, 710, 987, 525, 922, 318, 352, 53, 539, 291, 122, 494, 866, 143, 773, 977, 311, 257, 999, 882, 557, 63, 877, 529, 689, 909, 45, 489, 209, 854, 283, 110, 70, 266, 693, 465, 682, 710, 697, 883, 299, 484, 522, 902, 616, 917, 38, 8, 509, 884, 39, 588, 934, 683, 722, 662, 577, 106, 393, 889, 260, 22, 912, 59, 614, 206, 230, 986, 928, 400, 541, 199, 85, 388, 576, 157, 506, 278, 591, 252, 136, 441, 893, 319, 596, 592, 1, 19, 775, 856, 540, 269, 106, 594, 155, 639, 283, 766, 925, 410, 181, 299, 56, 750, 136, 390, 747, 125, 980, 276, 21, 422, 94, 217, 130, 942, 17, 271, 78, 297, 676, 837, 239, 92, 387, 725, 866, 577, 624, 841, 580, 655, 675, 210, 916, 421, 138, 402, 392, 989, 395, 335, 522, 9, 904, 43, 479, 279, 755, 838, 32, 165, 769, 807, 160, 891, 999, 511, 462, 573, 884, 235, 628, 782, 669, 756, 468, 202, 854, 164, 87, 691, 991, 53, 45, 951, 278, 759, 217, 966, 592, 25, 514, 377, 725, 568, 537, 988, 194, 841, 735, 62, 40, 266, 27, 481, 993, 576, 551, 602, 851, 926, 964, 341, 703, 905, 234, 834, 66, 515, 111, 709, 706, 228, 764, 235, 135, 667, 724, 894, 637, 871, 314, 707, 230, 252, 683, 936, 253, 457, 626, 671, 837, 945, 275, 911, 752, 744, 159, 420, 16, 675, 827, 269, 481, 75, 825, 629, 258, 449, 802, 158, 28, 460, 587, 873, 427, 21, 967, 996, 420, 298, 424, 791, 841, 32, 499, 550, 709, 924, 661, 734, 665, 745, 387, 9, 558, 651, 970, 250, 765, 448, 579, 604, 284, 862, 777, 531, 131, 743, 725, 296, 7, 906, 49, 973, 530, 688, 455, 829, 884, 381, 332, 168, 298, 685, 676, 369, 392, 248, 995, 966, 826, 578, 519, 509, 803, 267, 757, 940, 211, 283, 48, 670, 411, 517, 430, 529, 289, 833, 947, 894, 585, 789, 63, 878, 43, 424, 524, 22, 110, 27, 754, 848, 630, 679, 850, 819, 526, 263, 560, 76, 894, 742, 595, 934, 352, 868, 833, 735, 639, 382, 639, 484, 485, 699, 735, 34, 185, 99, 512, 938, 439, 359, 53, 379, 203, 948, 910, 127, 779, 454, 119, 827, 523, 515, 485, 752, 730, 479, 649, 558, 46, 932, 123, 617, 665, 551, 472, 284, 294, 990, 309, 84, 183, 851, 813, 509, 576, 861, 448, 146, 52, 796, 564, 147, 212, 605, 889, 517, 612, 410, 952, 382, 619, 269, 375, 66, 486, 435, 942, 729, 929, 708, 125, 982, 982, 859, 564, 477, 359, 709, 231, 142, 834, 361, 940, 504, 966, 945, 782, 237, 703, 812, 476, 208, 697, 60, 982, 566, 901, 125, 522, 163, 319, 675, 518, 676, 306, 592, 194, 981, 931, 416, 483, 816, 966, 625, 363, 480, 102, 408, 998, 250, 418, 433, 868]
    //     expect(longestSubarray1(arr, 500)).toBe(12)
    // })
})
