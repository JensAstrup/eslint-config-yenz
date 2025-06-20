// File with sorting and organization errors for perfectionist plugin

// Unsorted imports
import { Logger } from './utils/logger'

// Unsorted interface properties
interface UserProfile {
  username: string;
  id: number;
  email: string;
  createdAt: Date;
  avatar?: string;
  age: number;
}

// Unsorted object properties
const userConfig = {
  theme: 'dark',
  autoSave: true,
  notifications: true,
  language: 'en',
  debugMode: false,
  maxRetries: 3,
}

// Unsorted array elements (where sorting makes sense)
const priorities = ['medium', 'low', 'urgent', 'high']
const statusOptions = ['pending', 'active', 'cancelled', 'completed']

// Unsorted enum values
enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  GUEST = 'guest',
  MODERATOR = 'moderator',
}

// Unsorted type union
type Status = 'loading' | 'error' | 'success' | 'idle';

// Unsorted function parameters
function processUser(
  email: string,
  age: number,
  username: string,
  id: number,
  isActive: boolean
) {
  return { id, username, email, age, isActive }
}

// Unsorted class members
class UserManager {
  private users: UserProfile[] = []
  public currentUser: UserProfile | null = null
  private logger: Logger
  public isLoading: boolean = false
  
  constructor(logger: Logger) {
    this.logger = logger
  }
  
  public updateUser(user: UserProfile): void {
    // implementation
  }
  
  private validateUser(user: UserProfile): boolean {
    return true
  }
  
  public createUser(userData: Partial<UserProfile>): UserProfile {
    // implementation
    return {} as UserProfile
  }
  
  public deleteUser(id: number): void {
    // implementation
  }
  
  private logAction(action: string): void {
    this.logger.log(action)
  }
}

// Unsorted destructuring
const { username, id, email, createdAt, avatar, age } = userProfile

// Unsorted exports
export { priorities, processUser, statusOptions, UserManager, UserRole }
export type { Status, UserProfile }
